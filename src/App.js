import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import FavorStatus from './pages/FavorStatus';
import FavorDescription from './pages/FavorDescription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import FavorRequest from './pages/FavorRequest';
import Demand from './pages/Demand';
import Error from './pages/Error';

const json = [
  {
      "_id": "625f44bb0a82f4a77ed69aab",
      "title": "New Favor",
      "description": "Can anyone get me a cup of coffe from Bcafe?",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 3,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-19T23:24:43.801Z",
      "__v": 0
  },
  {
      "_id": "625f45c9306c5a65ace29bb4",
      "title": "New Favor",
      "description": "Can anyone get me a cup of coffe from Bcafe?",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 4,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-19T23:29:13.746Z",
      "__v": 0
  },
  {
      "_id": "625f45ea306c5a65ace29bb7",
      "title": "New Favor",
      "description": "Can anyone get me a cup of coffe from Bcafe?",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 3,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-19T23:29:46.139Z",
      "__v": 0
  },
  {
      "_id": "6261e9ea837b08773a23a4a4",
      "title": "Sanchit Favor test",
      "description": "Can you slap patel for me",
      "category": "FunRequest",
      "status": "Requested",
      "favoreeId": "625e6fa2601179857858e8cd",
      "favorCoins": 1,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-21T23:34:02.939Z",
      "__v": 0
  },
  {
      "_id": "62632de9cf18640bc4bafb77",
      "title": "Patel is chu",
      "description": "veggie sandwich",
      "category": "Subway",
      "status": "Requested",
      "favoreeId": "626259cf473750452894b7c5",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:36:25.531Z",
      "__v": 0
  },
  {
      "_id": "62632e91aa911b49c3ce71ee",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:39:13.732Z",
      "__v": 0
  },
  {
      "_id": "62632ea1a75aad45d62659b0",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:39:29.887Z",
      "__v": 0
  },
  {
      "_id": "62632ee97367f8e8a7e9ecfb",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:40:41.445Z",
      "__v": 0
  },
  {
      "_id": "62632f068edb2a4ae77ad940",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:41:10.412Z",
      "__v": 0
  },
  {
      "_id": "62632f2f177d50b61b779265",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:41:51.396Z",
      "__v": 0
  },
  {
      "_id": "62632f5c50a48d83f81708ca",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:42:36.431Z",
      "__v": 0
  },
  {
      "_id": "62632fe01c6e38c608069ee4",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 2,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:44:48.526Z",
      "__v": 0
  },
  {
      "_id": "62632feb1c6e38c608069ee8",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 3,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:44:59.409Z",
      "__v": 0
  },
  {
      "_id": "62632fef1c6e38c608069eeb",
      "title": "Meethe log meethi pasand",
      "description": "The quick brown fox jumps over the lazy dog",
      "category": "Grocery",
      "status": "Requested",
      "favoreeId": "625f16b7a3bbc1450d094a67",
      "favorCoins": 3,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-04-22T22:45:03.643Z",
      "__v": 0
  },
  {
      "_id": "62747c942bbe851fafdc10bf",
      "title": "Bobby ka meethapa",
      "description": "Meethapan kam karo",
      "category": "Coffee",
      "status": "Requested",
      "favoreeId": "6272c2110486f3c655665b70",
      "favorCoins": 1,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-05-06T01:40:36.514Z",
      "__v": 0
  },
  {
      "_id": "62747ca72bbe851fafdc10c2",
      "title": "Bobby ka meethapa",
      "description": "Meethapan kam karo",
      "category": "Coffee",
      "status": "Requested",
      "favoreeId": "6272c2110486f3c655665b70",
      "favorCoins": 1,
      "favorRequestTimer": 60,
      "favorRequestTime": "2022-05-06T01:40:55.554Z",
      "__v": 0
  }
]

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="favor-status" element={<FavorStatus />} />
        <Route path="favor-description" element={<FavorDescription />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="favor-request" element={<FavorRequest />} />
        <Route path="demand" element={<Demand cards={json}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}
export default App;
