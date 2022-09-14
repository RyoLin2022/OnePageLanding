import React, { useEffect } from 'react'
import { useState } from 'react'
import { ethers } from 'ethers'
import './navigation.css'
let currentAccount = null;
export const Navigation = (props) => {

  const [walletAddress, setWalletAddress] = useState('')
  async function changingAccount() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => {
        requestAccount()
      })
    }
  }

  useEffect(() => {
    changingAccount()
  }, [walletAddress])

  async function requestAccount() {
    console.log('Requesting account...')
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setWalletAddress(accounts[0])
      currentAccount = accounts[0]
      sessionStorage.setItem('Account', currentAccount)
      let lengthAcc = currentAccount.length
      let PCButton = document.getElementById("connect-btnPC");
      let MobileButton = document.getElementById("connect-btnMobile");

      MobileButton.innerText =
        currentAccount.substring(0, 4) + '...' + currentAccount.substring(lengthAcc - 4, lengthAcc)

      PCButton.innerText =
        currentAccount.substring(0, 4) + '...' + currentAccount.substring(lengthAcc - 4, lengthAcc)
    } catch (error) {
      console.log('error connecting')
    }
    //Check if Metamask Exist
    if (window.ethereum) {
      console.log('detected')
    } else {
      console.log('not detected')
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      alert('Wallet connected successfully!')
    } else {
      alert('Please install an injected Web3 wallet')
    }
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Space ETH
          </a>{' '}
          <button onClick={connectWallet} id="connect-btnMobile" className="ForMobile">
            Connect Wallet
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Mechanism
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                NFT
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <button onClick={connectWallet} id="connect-btnPC" className="ForPC">
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
