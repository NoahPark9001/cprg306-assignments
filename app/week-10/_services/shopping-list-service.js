import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addNewItem(userId, itemObj) {
  try {
    let userItemsCollectionReference = collection(db, "users", userId, "items");
    let addItemPromise = await addDoc(userItemsCollectionReference, itemObj); //reference where you add the item
    console.log(addItemPromise.id);
  } catch (error) {
    console.log(error);
  }
}

export async function getItemList(userId) {
  let userItemsCollectionReference = collection(db, "users", userId, "items");
  let collectionSnapshot = await getDocs(userItemsCollectionReference);
  let itemList = [];
  collectionSnapshot.forEach((doc) => {
    let thisItem = {
      id: doc.id,
      ...doc.data(),
    };
    console.log(doc.id, " - ", doc.data());
    itemList.push(thisItem);
  });
  //console.log(itemList);
  return itemList;
}
