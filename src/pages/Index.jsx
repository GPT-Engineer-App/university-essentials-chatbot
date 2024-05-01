import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Link, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRobot } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const toast = useToast();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    toast({
      title: "Signed in successfully.",
      description: "Welcome to the university portal!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <Container maxW="container.xl">
      <Flex direction="column" minHeight="100vh">
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" p={4} bg="blue.500" color="white">
          <Heading size="md">University Portal</Heading>
          {!isLoggedIn && (
            <Button colorScheme="blue" variant="outline" onClick={handleSignIn}>
              Sign In
            </Button>
          )}
          {isLoggedIn && (
            <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid" onClick={toggleChatBot}>
              {showChatBot ? "Close ChatBot" : "Open ChatBot"}
            </Button>
          )}
        </Flex>

        {/* Body */}
        <VStack spacing={4} p={4} flex="1">
          <Heading size="lg">Welcome to Our University</Heading>
          <Text fontSize="md">Discover a place where you can learn, grow and be part of a community that values your aspirations.</Text>
          <Image src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTcxNDU1MDA3M3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </VStack>

        {/* Footer */}
        <Flex p={4} bg="gray.200" justifyContent="center">
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin />
          </Link>
        </Flex>
      </Flex>

      {/* ChatBot UI */}
      {showChatBot && (
        <Box position="fixed" bottom="20px" right="20px" p={4} bg="white" boxShadow="md" borderRadius="md" width="300px">
          <VStack spacing={4}>
            <Heading size="sm">University Helper Bot</Heading>
            <Text>Welcome! How can I assist you today?</Text>
            <Input placeholder="Type your question here..." />
            <Button colorScheme="blue">Send</Button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Index;
