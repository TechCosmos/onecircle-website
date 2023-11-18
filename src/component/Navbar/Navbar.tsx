import {
  CloseIcon, HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box, Collapse, Flex, IconButton, Image, Link, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure,
} from "@chakra-ui/react";

export default function WithSubnavigation() {
  const logoPath = "assets/onewanko_logo.png";
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "white");
  const logoColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Box 
      w="100%"
      h="80px"
      position="fixed"
      top={0}
      bg="transparent"
      zIndex={999}
      >
      <Flex
        color={textColor}
        minH="80px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderColor={borderColor}
        align="center"
      >
        <Flex
          flex={{ base: 0.3, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify="center" alignItems="center">
          <Flex width="75%" justify="space-between" alignItems="center">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily="heading"
              color={logoColor}
            >
              <Link href="/">
                <Image src={logoPath} alt="onewanko" height={75} width={125} />
              </Link>
            </Text>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.100", "gray.100");
  const linkHoverColor = useColorModeValue("gray.400", "gray.400");

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize="15"
            fontWeight="800"
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const bgColor = "transparent"; 

  return (
    <Stack bg={bgColor} p={4} display={{ md: "none" }} justify="center">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const textColor = useColorModeValue("gray.100", "gray.100");

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify="space-between"
        align="center"
        _hover={{ textDecoration: "none" }}
      >
        <Text fontWeight={600} color={textColor}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
];
