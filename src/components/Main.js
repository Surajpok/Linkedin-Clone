import styled from "styled-components";

const Main = (props) => {
  return(
  <Container>
      <ShareBox>
       <div>
        <img src="../images/user.svg" alt="" />
        <button>Start a Post</button>
      </div>
      
      <div>
        <button>
          <img src="../images/photopost.svg" alt="" />
          <span>Photo</span>
        </button>
        <button>
          <img src="../images/video.svg" alt="" />
          <span>Video</span>
        </button>
        <button>
          <img src="../images/event.svg" alt="" />
          <span>Event</span>
        </button>
        <button>
          <img src="../images/article.svg" alt="" />
          <span>Write Article</span>
        </button>
      </div>
      </ShareBox>
      
  </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom :8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  border: 1px solid rgba(0, 0, 8, 0.1);
`;
const ShareBox = styled(CommonCard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin:0 0 0 8px;
background: white;
div{
  button{
    outline:none;
    color:rgba(0 , 0, 0, 0.6);
    font-size: 14px;
    line-height:1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img{
        width:48px;
        border-radius: 50%;
        margin-right: 8px;
        color: blue;
      }
      button{
        margin:4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
        
      }
    }
  &:nth-child(2){
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding-bottom: 4px;
          button{
            img{
              margin: 0 4px 0 -2px;
            }
            span{
              color: #70b5f9;
            }
          }
        }
}
`;

export default Main;


