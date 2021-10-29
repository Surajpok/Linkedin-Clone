import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recomendation>
          View all recomendations
          <img src="/images/right-icon.svg" alt="" />
        </Recomendation>
      </FollowCard>
      <BannerCard>
        <img src="../images/banner.jpg" alt=""/>
      </BannerCard>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 93 ms;
  position: relative;
  border: none;
  border: 1px solid rgba(0, 0, 8, 0.1);
  padding: 12px;
`;
const Title = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 12px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      border-radius: 15px;
      box-sizing: border-box;
      align-items: center;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      text-align: center;
      outline: none;
      max-width: 480px;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("/images/hastag.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recomendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
`;
const BannerCard = styled(FollowCard)`
  img {
    height: 100%;
    width: 100%;
  }
`;
