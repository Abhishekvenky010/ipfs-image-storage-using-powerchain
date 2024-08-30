import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import contractABI from './contractABI'; // Update this path

const ImageRetrieval = ({ imageId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const contractAddress = '0xYourContractAddress';  // Replace with your smart contract address

  useEffect(() => {
    const fetchImage = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const imageHash = await contract.methods.getImageHash(imageId).call();
      const ipfsUrl = `https://ipfs.io/ipfs/${imageHash}`;
      setImageUrl(ipfsUrl);
    };

    fetchImage();
  }, [imageId]);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="IPFS Image" /> : 'Loading...'}
    </div>
  );
};

export default ImageRetrieval;
