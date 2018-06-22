import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.constructLinks = this.constructLinks.bind(this);
    this.getMenu = this.getMenu.bind(this);
  }
  componentDidMount() {
    this.constructLinks();
  }

  getMenu() {
    let lists = {
      'Search': '/Search',
      'Budget': '/Budget'
    };
    return lists;
  }

  constructLinks() {
    // const menus = this.props.menus;
    const menus = this.getMenu();
    /*
      {
        linkname: '/linkname'...
      }
    */
    let arr = Object.keys(menus);
    // console.log('menus: ', menus);
    // console.log('arr: ', arr);
    return(
      arr.map((link) => {
        return (
          <Link to={menus[link]}>{link}</Link>
        )
      })
    )
  }

  render() {
    const links = this.constructLinks();
    return(
      <div>
        {
          links.map((eachLink) => {
            return eachLink;
          })
        }
      </div>
    )
  }
}