import React from "react";
import styled from "styled-components";
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/Home">
            {" "}
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
            <img src="/images/search-icon.svg" />
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut>
                <a>Signout</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <span>Try Premium</span>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 8, 0.08);
  left: 0;
  /* padding:0 24px; */
  position: fixed;
  top: 0;
  width: 100vw;
  line-height: 3.5;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin: 0 10px;
  font-size: 0px;
`;

const Search = styled.div`
  display: flex;
  opacity: 1;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  svg {
    color: rgba(0, 0, 0, 0.09);
  }
  img {
    position: absolute;
    bottom: 20px;
    left: 15px;
    height: 16px;
  }
  input {
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 2.5;
    font-weight: 400;
    outline: none;
    font-size: 16px;
    height: 34px;
    border-color: #dce6f1;
    transition-duration: 0.4s;
    &:focus {
      width: 300px;
      border-radius: 6px;
      height: 38px;
    }
  }
`;
const Nav = styled.div`
  margin: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  justify-content: center;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 82px;
    position: relative;
    text-decoration: none;
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 55px;
  background: white;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 0 0 rgb(0 0 0 / 10%);
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  span {
    display: flex;
  }
`;
