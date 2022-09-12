export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/SpaceEthLogo.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>SpaceEth is a token looking forward to the Ethereum merge.
                We are all Eth holders and believes that ETH is going to the moon after the merge.
                The token keeps buying ETH back and put it into the NFT reward pool to be mined.
                The NFTs can be leveled up by burning the spaceEth token.</p>
              <p>We spread Eth to people, just keep and hold eth. <br />
                'If you don't hold, you won't be rich' - CZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
