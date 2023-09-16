import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const collectionRef = collection(db, "Items");
    const filteredCollectionRef = query(
      collectionRef,
      where("id", "==", itemId)
    );

    getDocs(filteredCollectionRef)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          const productAdapted = { id: doc.id, ...data };
          setTimeout(() => {
            setProduct(productAdapted);
          }, 1000);
        } else {
          console.log("Product isn't available");
          setProduct(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;