// import { useState } from "react";
// import Modal from "react-modal";
// import PropTypes from 'prop-types';
// import css from "./Modal.module.css";

// Modal.setAppElement("#modal-root"); // Устанавливаем корневой элемент для доступности

// const ModalComponent = ({data}) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   console.log('modalIsOpen', modalIsOpen)

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const modalStyle = {
//     overlay: {
//       backgroundColor: "rgba(18, 20, 23, 0.50)", // Устанавливаем фон для backdrop
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     content: {
//       width: '541px',
//       borderRadius: "24px",
//       padding: "40px",
//       // Здесь можно задать стили для контента модального окна, если необходимо
//     },
//   };

//   return (
//     <div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Пример модального окна"
//         style={modalStyle}
//       >
//         <img src={data.img} alt="" className={ css.imageItem} />
//         <button onClick={closeModal}>Закрыть</button>
//       </Modal>
//     </div>
//   );
// }

// export default ModalComponent;

// ModalComponent.propTypes = {
//   data: PropTypes.shape(),
//   // modalIsOpen: PropTypes.bool
// }
