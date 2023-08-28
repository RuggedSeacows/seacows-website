import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
declare const window: any;
declare const ethereum: any;
export const wallet = (call: Function) => {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });
    if (!connector.connected) {
      // create new session
      connector.createSession();
    } else {
      call && call(connector.accounts[0])
      console.log(connector)
    }
    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];
      // setWalletAddress(accounts[0])
      call && call(accounts[0])
    });

    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
      // setWalletAddress(accounts[0])
      call && call(accounts[0])
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }
      // Delete connector
    });
  }

  export const metamask = async (call: Function) => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      call && call(accounts[0])
    } else {
      window.open('https://metamask.io/', '_blank' )
    }
  }