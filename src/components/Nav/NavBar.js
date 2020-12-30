import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import style from 'styled-components';

export const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

	return (
		<Nav>
			<Logo>
				<Link to="/">Boast or Roast</Link>
			</Logo>

			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				<MenuLinks>
					<Link to="/sorted">Sort Post</Link>
				</MenuLinks>
				<MenuLinks>
					<Link to="/post">Make A Post</Link>
				</MenuLinks>
				<MenuLinks>
					<Link to="/display">Boast/Roasts</Link>
				</MenuLinks>
			</Menu>
		</Nav>
	);
};

const Nav = style.nav`
        background: #221f1f;
        padding: 0 2rems;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 2px solid #2d7c9d;

`;

const MenuLinks = style.li`
    list-style: none;
    a{
        padding: 1rem 2rem;
        cursor: pointer;
        text-algin: center;
        text-decoration: none;
        color: #a4a29e;
        transition: all 0.3s ease-in;
        font-size: 0.9rem;
    }
    a:hover{
        color: #fff;
    }
`;

const Logo = style.div`
        padding: 1rem 0;
        margin-left: 20px;
        color: #a4a29e;
        text-decoration: none;
        font-weight: 800;
        font-size: 1.7rem;
        a{
            text-decoration: none;
            color: #a4a29e;
        }
`;

const Hamburger = style.div`
    display: none;
    flex-direction: column;
    cursor: pointer;


    span{
        height: 2px;
        width: 25px;
        background: #a4a29e;
        margin-bottom: 4px;
        border-radius:5px;
        margin-right: 20px;
    }

     @media (max-width: 768px){
        display: flex;
    }

`;

const Menu = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height:${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.4s ease-in;
        
    }

`;
