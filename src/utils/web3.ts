
declare const Web3auth: any;
declare const window: any

export const auth =  (connected: Function, disconnected: Function) => {
  const web3authSdk = Web3auth
    let web3AuthInstance = null;

    function subscribeAuthEvents(web3auth: any) {
        web3auth.on("connected", (data: any) => {
          console.log("Yeah!, you are successfully logged in", data);
          connected && connected()
        });
        web3auth.on("connecting", () => {
          console.log("connecting");
        });

        web3auth.on("disconnected", () => {
          console.log("disconnected");
          disconnected && disconnected()
        });

        web3auth.on("errored", (error: any) => {
            console.log("some error or user have cancelled login request", error);
        });

        web3auth.on("MODAL_VISIBILITY", (isVisible: any) => {
            console.log("modal visibility", isVisible)
        });
    }

    (async function init() {
      window.web3AuthInstance = new web3authSdk.Web3Auth({
        chainConfig: {
          chainNamespace: "eip155"
        },
        clientId: "BMg4FxbTIJD3eb-qkq-AUYxnd26AJ8JFNtY1esm1DBBdVg585CPU7yiB8WDb95ptolq-bsT2IdHXDjEEsbtYliM" // get your clientId from https://dashboard.web3auth.io
      });
      subscribeAuthEvents(window.web3AuthInstance)
      await window.web3AuthInstance.initModal();
    })();
}