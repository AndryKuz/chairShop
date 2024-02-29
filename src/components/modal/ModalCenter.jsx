import { useDispatch, useSelector } from 'react-redux';
import cl from './ModalCenter.module.scss'
import { clearArrayFavorite } from './modalSlice';


const ModalCenter = ({onHide}) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    onHide();
  }


  const clearItemWishlist = () => {
    dispatch(clearArrayFavorite());
    handleModal();
  }
  
  return (
    <>
    <div className="overlay" onClick={handleModal}/>
    <div className={cl.wrapperModalCenter}>
      <h5>Are you sure to empty your wishlist?</h5>
      <div className={cl.modalButton}>
        <button onClick={handleModal}>Cancel</button>
        <button onClick={clearItemWishlist}>Ok</button>
      </div>
    </div>
    </>
    
  );
};

export default ModalCenter;