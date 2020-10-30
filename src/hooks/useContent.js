import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../contexts/Firebase';
import "firebase/firestore"


export default function useContent(target) {
    const [content, setContent] = useState([]);
    const { db } = useContext(FirebaseContext);
    
    useEffect(() => {
        db.collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                
                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            })
            // eslint-disable-next-line
    }, [])
    
    return { [target]: content };
}