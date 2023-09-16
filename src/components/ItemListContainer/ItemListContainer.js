import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import ItemList from "../ItemList/ItemList";
import '../../App.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = collection(db, "Items");
    let filteredCollectionRef;

    if (categoryId) {
      filteredCollectionRef = query(
        collectionRef,
        where("category", "==", categoryId)
      );
    } else {
      filteredCollectionRef = collectionRef;
    }

    getDocs(filteredCollectionRef)
      .then((response) => {
        const productAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="bg-green-400 mx-auto px-4 py-8">
      <h1 className="BodyTitle">
        {categoryId ? `Category: ${categoryId}` : "All Products"}
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;