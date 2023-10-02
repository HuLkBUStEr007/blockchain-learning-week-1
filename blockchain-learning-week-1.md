# **BlockChain Summary**
## **1. Concept Of Blockchain**

**![N|Solid](https://png.pngtree.com/png-clipart/20230128/original/pngtree-blockchain-vector-transparent-image-png-image_8933372.png)**

## What is Blockchain?
A **Blockchain** is “a distributed database that maintains a continuously growing list of ordered records, called blocks.” These blocks “are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.
A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.

## Features

- **Immutable** : Immutability means that the blockchain is a permanent and unalterable network. Blockchain technology functions through a collection of nodes.
- **Distributed** - All network participants have a copy of the ledger for complete transparency. A public ledger will provide complete information about all the participants on the network and transactions. The distributed computational power across the computers ensures a better outcome. 
- **Decentralized** : Blockchain technology is a decentralized system, which means that there is no central authority controlling the network. Instead, the network is made up of a large number of nodes that work together to verify and validate transactions. Each and every node in the blockchain network will have the same copy of the ledger.
![N|Solid](https://media.geeksforgeeks.org/wp-content/uploads/20200108141104/geeksforgeeks21.jpg)
- **Secure** : All the records in the blockchain are individually encrypted. Using encryption adds another layer of security to the entire process on the blockchain network.
- **Consensus** : Every blockchain has a consensus to help the network to make quick and unbiased decisions. Consensus is a decision-making algorithm for the group of nodes active on the network to reach an agreement quickly and faster and for the smooth functioning of the system.
- **Unanimous** : Every record is updated simultaneously and the updations propagate quickly in the network. So it is not possible to make any change without consent from the majority of nodes in the network.
- **Faster Settlement** : Blockchain offers a faster settlement compared to traditional banking systems.


## How Blockchain differs from traditionl databases?
The main difference is centralization, while traditional databases were centralized means they were controlled by some individual or an authority which make them easy to tampered with. But the scenerio with Blockchain were different, being a decentralized tech made it nearly impossbile to tampere with by any other individual. That's why Blockchain is used in maintaining secure and decentralized records of [cryptocurrencies](https://www.geeksforgeeks.org/what-is-a-cryptocurrency/) transactions. 

> ## **Facts!!** 
>  **The Concept of Blockchain Has Been Around Since the Early 1980s : A quick glance at the history shows that the concept of a decentralised and distributed database of transactions was originally outlined in the early 1980s. However, it was only with a 1991 white paper by Stuart Haber and W. Scott Stornetta that the idea of how to time-stamp a digital document became reality. 
>And now As of 2023, there have been over 82 million Blockchain cryptocurrency wallet users.**


## **2. Working of Blockchain**
**Transaction** : Blockchain transaction is nothing but data transmission across the network of computers in a blockchain system.
**How Blockchain Transaction works? !!**
This might be the question everyone thinks when trying to learn about blockchain, we will learn about it and cover everything about it in three stages: Transaction creation, verification, and block addition to the chain.
## Transaction Creation
**(i)** Transactions are initiated from users end who want to transfer digital assets or any digital info.
**(ii)** The user creates a transaction by specifying the sender, recipient, amount, and any additional data or conditions relevant to the specific blockchain application.
**(iii)** The transaction is done using the private key of the sender that acts as a unique identity proof of the sender.
## Transaction Verification
Blockchain transaction verification stands as a fundamental process intrinsic to the functioning of blockchain technology.
It facilitates the validation and addition of transactions to the blockchain ledger - a form of a digital and distributed ledger. Grasping the essence of this process is a step toward deciphering the multifaceted potential of blockchain technology.
**![N|Solid](https://s3.cointelegraph.com/storage/uploads/view/9f3e567803b4c29aaf63c50bf50fe946.png)**
## Block Addition to the Chain
There are different consensus mechanisms used to verify transactions and add new blocks to a blockchain. In cryptocurrency, the most common methods are proof-of-work and proof-of-stake.
We will soon learn about consensus mechanics.
## What are Miners & How they are important?
Miners are an essential part of the blockchain network. They are responsible for verifying transactions and adding them to the blockchain. Miners use powerful computers to solve complex mathematical problems that allow them to validate transactions.

In order to add a transaction to the blockchain, a miner must first verify that the transaction is valid. This involves checking that the sender has enough funds to complete the transaction and that the transaction has not already been recorded on the blockchain.

Once a miner has verified a transaction, they add it to a block along with other verified transactions. The miner then uses their computing power to solve a cryptographic puzzle that allows them to add the block to the blockchain. This process is called mining.
## Concept of Consensus
It is a algorithm that is used in transaction to meet a common agreement among users.
the consensus protocol makes sure that every new block that is added to the Blockchain is the one and only version of the truth that is agreed upon by all the nodes in the Blockchain.
**There are many types of [Consensus algorithms](https://www.geeksforgeeks.org/consensus-algorithms-in-blockchain/):**
**i.** Proof of Work (PoW)
**ii.** Proof of Stake (PoS)
**iii.** proof of importance (PoI)
**iv.** Proof of capacity (PoC)
**v.** Proof Of Burn (PoB)
## **3. Key Components of Blockchain**
**i. Miners :** Miners are an essential part of the blockchain network. They are responsible for verifying transactions and adding them to the blockchain. Miners use powerful computers to solve complex mathematical problems that allow them to validate transactions.
**ii. Blocks :** Block is a place in a blockchain where data is stored. In the case of cryptocurrency blockchains, the data stored in a block are transactions. These blocks are chained together by adding the previous block's hash to the next block's header.
**iii. Chain :** In blockchain the blocks where data is stored link together to form a type of network chain. This chain increases as the no of transaction increases.
**iv. Node :** A node in Blockchain refers to a computer or device connected to a Blockchain network. It plays a vital role in the distributed ledger technology by validating transactions and maintaining the integrity of the network.
**![N|Solid](https://kalkinemedia.com/storage/uploads/original/1602671632_5f86d410255c3_mceclip0.png)**
## Significance of cryptographic hash functions in linking blocks
Cryptographic hash functions play a crucial role in blockchain technology by ensuring data integrity, security, and linking blocks in efficient manner.
Each block in a blockchain contains a hash of the previous block's data, typically referred to as the "previous block's hash." This linkage is achieved by including the hash of the previous block in the current block's data before hashing. This forms a chain of blocks, as changing the data in a block would require recalculating its hash, which would, in turn, alter the subsequent block's hash. This linkage ensures the integrity of the entire blockchain.
**![N|Solid](https://hackernoon.imgix.net/images/BYWRsHWtmGOUC5N4fwNhMqohMAC3-g893iox.jpeg)**
## **4.Cryptocurrency**
![N|Solid](https://www.wallstreetmojo.com/wp-content/uploads/2018/01/Cryptocurrency-1.jpg.webp)
## What is Cryptocurrency? & How does Crypto uses Blockchain to ensure its security?
Cryptocurrency is a digital payment system that does not rely on banks to verify transactions. Cryptocurrency payments exist purely as digital entries to an online database. Which means it can only be used digitally.
So now the main question: **How crypto relates to Blockchain?**
Well we now know that crypto is nothing but an asset for us even though it is digitally but it is something that is important to us, being something precious it requires a very secure environment to handle it and here Blockchain comes to play, we all know how good blockchain is in terms of security because of this exact reason blockchain is used to develope frameworks that helps in managing crypto. Whether it is to store it or transfer it blockchain helps us to do it safely and securily as it is a decentralized tech means no other person can get access to it except the owner. It also stores the records of transactions done with the crypto.
**How Blockchain is used in this?**
Well blockchain assign private key to the user which is just like your fingerprint meanning it is unique. Unlike public Key which is known to everyone private keys is the one and only key user can use to do transactions, without it even the owner can't access the records and object which is stored in this case crypto. 
## Important Terms in Crypto
**i. Wallet** : A cryptocurrency wallet is an application that functions as a wallet for your cryptocurrency. It is called a wallet because it is used similarly to a wallet you put cash and cards in. Instead of holding these physical items, it stores the passkeys you use to sign for your cryptocurrency transactions and provides the interface that lets you access your crypto.
**ii. Private keys :** A private key is a long alphanumeric code that acts similarly to a password. Private keys are used to authorize cryptocurrency transactions. Your private key is generated by your wallet and is used to create your public key
**iii. Public Keys :** A public key allows you to receive cryptocurrency transactions. It's a cryptographic code that's paired to a private key. While anyone can send transactions to the public key, you need the private key to “unlock” them and prove that you are the owner of the cryptocurrency received in the transaction.
**iv. Addresses :** A crypto address is a unique identifier, composed by a string of letters and numbers, that serves as a virtual location to where a cryptocurrency can be sent
![N|Solid](https://cdn1.technologyevaluation.com/getattachment/a16365ee-33c4-5d00-83b8-600370329b90/shutterstock_773006656-cryptocurrency-blockchain-laptop-connected.png?source=tw2&ext=.png&width=500&height=250)
