import React from "react";
import ProductListCont from "./components/product/list/product-list.container";
import ProductList from "./components/product/list/product-list.component";
import CreateButton from "./components/CreateButton";
import Modal from './components/Modal';
import { useState } from "react";

export function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <h1>Grocery list</h1>
      <ProductListCont
        render={(products, loading, error) => (
          <>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ProductList products={products} />
            )}
          </>
        )}
      />
      <CreateButton onClick={openModal} buttonText="+" />
      
      
      <Modal visible={modalVisible} title="Модальное окно" onClose={closeModal}>
        <p>Содержимое модального окна</p>
      </Modal>
      
      
    </div>
  );
}
