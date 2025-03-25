import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const menuItems = [
     'About Us',
     'Pricing',
     'Customers',
     'Solutions',
     ' Book a Demo',
     'Contact Us',
   ];
  return (
    <>
      <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <img src="/mainLogo.svg" alt="" />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link>About Us</Link>
          </NavbarItem>
          <NavbarItem>
            <Link>Pricing</Link>
          </NavbarItem>
          <NavbarItem>
            <Link>Customers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link>Solutions</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem className=" lg:flex">
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="solid"
              className="text-black"
              radius="full"
              size="sm"
            >
              Book a Demo
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-white"
              href="#"
              variant="bordered"
              radius="full"
              size="sm"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-white"
        />
        <NavbarMenu className="text-white bg-primary/10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full hover:text-primary"
                color={index === 4 ? 'primary' : 'white'}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
