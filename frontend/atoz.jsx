import React from "react"; // needing react to interact with the website
import ReactDOM from "react-dom";

import configureStore from "./store/store"; // import configurestore function to connecting the front end
import Root from "./components/root"; // render through root compoents

//find the element id root and replace it with root componets
document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root); //passing store as props
});

/*
sudo apt-get remove rubygems
wget http://rubyforge.org/frs/download.php/60718/rubygems-2.6.1.tgz
tar xzvf rubygems-2.6.1.tgz
cd rubygems-2.6.1
sudo ruby setup.rb
sudo ln -s /usr/bin/gem1.8 /usr/bin/gem
sudo gem update --system
*/
