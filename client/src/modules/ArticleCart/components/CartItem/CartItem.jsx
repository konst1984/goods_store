import React, { useRef } from 'react';

import { Image } from 'antd';
import SwitcherQuantity from 'components/UI/SwitcherQuantity/SwitcherQuantity';
import { AnimatePresence, motion } from 'framer-motion';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from 'redux/features/appSlice';

const box = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
  },
};

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [remove, setRemove] = React.useState(false);
  const intervalRef = useRef(null);

  const handleDetails = (product) => {
    const rootId = product.title.split('').join('');
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
        loading: false,
      },
    });
  };

  const removeProductInCart = () => {
    setRemove(true);
    intervalRef.current = setTimeout(() => {
      dispatch(deleteItem(item._id));
      clearInterval(intervalRef.current);
    }, 500);
  };

  return (
    <AnimatePresence>
      <motion.div className="Box" initial="initial" animate={remove ? 'initial' : 'animate'} exit="exit" variants={box}>
        <div className="relative flex flex-col sm_540:flex-row sm_540:h-60 md:max-w-none text-center gap-2 items-center justify-between rounded-xl bg-gray-200 p-2 dark:bg-[darkslategrey] dark:text-white">
          <div className="flex items-center rounded-xl overflow-hidden flex-shrink-0 md:h-full bg-gradient-to-r from-gray-300 to-gray-300">
            <Image src={item.image} rootClassName="w-52" />
          </div>

          <div className="flex gap-2 flex-col md:flex-row items-center sm_540:pt-6 flex-grow">
            <div className="flex-grow">
              <button
                onClick={() => handleDetails(item)}
                className="font-bold p-2 bg-[cadetblue] rounded-2xl w-full cursor-pointer block"
                title="Go to product page"
                aria-label="Go to product page"
              >
                {item.title}
              </button>

              <p className="font-semibold mt-2">${item.price}</p>
            </div>

            <SwitcherQuantity id={item._id} quantity={item.quantity} />

            <div className="flex gap-2 items-center">
              <div className="min-w-[120px]">
                <p className="w-max m-auto">Total price:</p>
                <p className="font-bold text-lg">${(item.quantity * item.price).toFixed(2)}</p>
              </div>

              <button
                onClick={removeProductInCart}
                className="absolute top-0 right-0 text-xl text-gray-600 h-10 w-10 p-2 hover:text-red-500 hover:scale-125 focus-visible:text-red-500 focus-visible:scale-125 cursor-pointer dark:text-white dark:hover:text-red-500 dark:focus-visible:text-red-500"
              >
                <RiCloseCircleFill className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartItem;
