import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const date = new Date()
    const handleSubmit = () => {
        firebase.storage().ref(`images/${image.name}`).put(image).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                console.log(user.uid, name, category, price, url);
                firebase.firestore().collection('products').add({
                    userId: user.uid,
                    name,
                    category,
                    price,
                    url,
                    createdAt: date.toDateString()
                })
                navigate('/')
            })
        })
    }
    return (
        <Fragment>
            <Header />
            <card>
                <div className="centerDiv">
                    <label htmlFor="fname">Name</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        id="fname"
                        name="Name"
                        defaultValue="John"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label htmlFor="fname">Category</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        id="fname"
                        name="category"
                        defaultValue="John"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <br />
                    <label htmlFor="fname">Price</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        id="fname"
                        name="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <br />
                    <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ' '}></img>
                    <br />
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <br />
                    <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
                </div>
            </card>
        </Fragment >
    );
};

export default Create;