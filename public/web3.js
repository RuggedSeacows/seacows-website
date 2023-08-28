const web3authSdk = window.Web3auth
    let web3AuthInstance = null;

    function subscribeAuthEvents(web3auth) {
        web3auth.on("connected", (data) => {
          console.log("Yeah!, you are successfully logged in", data);
        });

        web3auth.on("connecting", () => {
          console.log("connecting");
        });

        web3auth.on("disconnected", () => {
          console.log("disconnected");
        });

        web3auth.on("errored", (error) => {
            console.log("some error or user have cancelled login request", error);
        });

        web3auth.on("MODAL_VISIBILITY", (isVisible) => {
            console.log("modal visibility", isVisible)
        });
    }

    (async function init() {
      window.web3AuthInstance = new web3authSdk.Web3Auth({
        chainConfig: {
          chainNamespace: "eip155"
        },
        clientId: "BNAIgW2dWeI8oEoJ8UNanibx3xEWhch--aRZ1GjSXPOECJvHreEuo337_wNWG6qkhOoC9ag6KTC-MHwtNU76F70" // get your clientId from https://dashboard.web3auth.io
      });
      subscribeAuthEvents(window.web3AuthInstance)
      await window.web3AuthInstance.initModal();
      console.log(window)
    })();