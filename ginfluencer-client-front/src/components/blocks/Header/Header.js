import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";
import TitleBefore from "../../../assets/images/title_before.png";
import HeaderLogo from "../../../assets/images/header_logo.png";

const navigation = [
  { name: "소개", href: "/intro" },
  { name: "사업소개", href: "/bizinfo" },
  { name: "동행신청", href: "/apply" },
  { name: "후원하기", href: "/donate" },
  { name: "커뮤니티", href: "/community/notice" },
];

export default function Header({ user, handleLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h="16">
      {/* Sidebar (Drawer) */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <RouterLink to="/" onClick={onClose}>
              <Box
                w="12"
                h="10"
                bgImage={`url(${TitleBefore})`}
                bgSize="cover"
              />
            </RouterLink>
          </DrawerHeader>
          <DrawerBody>
            <Box
              display={{ base: "none", lg: "flex" }}
              flex="1"
              justifyContent="center"
              width="100%"
            >
              <nav style={{ display: "flex", gap: "10px" }}>
                {navigation.map((item) => (
                  <RouterLink
                    key={item.name}
                    to={item.href}
                    display="flex"
                    alignItems="center"
                    position="relative"
                    fontSize="18px"
                    fontWeight="bold"
                    _hover={{ color: "#285184" }}
                  >
                    {item.name}
                    <Box
                      position="absolute"
                      top="7px"
                      left="0"
                      bottom="0"
                      width="0"
                      height="1px"
                      bg="#285184"
                      transition="width 0.2s ease-in-out"
                      _hover={{ width: "100%" }}
                    />
                  </RouterLink>
                ))}
              </nav>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box>
        <Box
          position="sticky"
          top="0"
          zIndex="40"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          bg="white"
          boxShadow="sm"
          px="8"
          py="2"
        >
          {/* Logo */}
          <RouterLink
            to="/"
            onClick={onClose}
            display={{ base: "none", md: "flex" }}
            flex="1"
            justifyContent="center"
          >
            <Box w="24" h="12" bgImage={`url(${HeaderLogo})`} bgSize="cover" />
          </RouterLink>

          {/* Centered Navigation */}
          <Box
            display={{ base: "none", lg: "flex" }}
            flex="1"
            justifyContent="center"
          >
            <HStack as={List} spacing={4} width="100%">
              {navigation.map((item) => (
                <ListItem key={item.name} listStyleType="none">
                  <Link
                    as={RouterLink}
                    to={item.href}
                    onClick={onClose} // Drawer를 닫기 위해 onClose를 사용합니다.
                    display="flex"
                    alignItems="center"
                    gap={3}
                    px={2}
                    py={2}
                    fontSize="16px"
                    fontWeight="semibold"
                    borderRadius="md"
                    _hover={{ bg: "gray.50", color: "blue.500" }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </HStack>
          </Box>

          {/* Profile Dropdown */}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              display="flex"
              alignItems="center"
              p="2"
              rightIcon={<ChevronDownIcon />}
              aria-label="Open user menu"
            >
              {user?.owner_Name ? `${user.owner_Name}님` : "로그인"}
            </MenuButton>
            <MenuList>
              {user?.owner_Name && (
                <>
                  <MenuItem as={RouterLink} to="/store/myinfo">
                    나의 정보
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                </>
              )}
            </MenuList>
          </Menu>

          {/* Mobile Menu Toggle */}
          <IconButton
            aria-label="Open menu"
            icon={<CloseIcon />}
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
          />
        </Box>
      </Box>
    </Box>
  );
}
