import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { IoLogoWhatsapp } from "react-icons/io"


const ServiceProviders = () => {
    return (
        <>
            <Box>
                <Box
                    w="full"
                    border="1px solid #CCCCCC"
                    mb="8px"
                    py='10px'
                    borderRadius="12px">
                    <Flex
                        position="relative"
                        justifyContent="space-between"
                        alignItems="center"
                        p="4px">
                        <Flex>
                            <Box
                                border="1px solid #CCCCCC"
                                p=".7rem"
                                borderRadius="full">
                                <Box
                                    borderRadius="99px"
                                    overflow="hidden"
                                    maxW="45px">
                                    <Image
                                        alt=""
                                        src="/assets/logo.png"
                                        boxSize="full"
                                    />
                                </Box>
                            </Box>
                            <Box ms="12px" lineHeight="35px" fontSize='13px'>
                                <Text>Beacon Holidays</Text>
                                <Heading fontSize="11px">
                                    PKR 20,000/
                                    <span
                                        style={{
                                            color: "skyblue",
                                            fontWeight: "200",
                                        }}>
                                        person
                                    </span>
                                </Heading>
                            </Box>
                            <Box position="absolute" top="-3" right="0">
                                <Box
                                    bg="#222222"
                                    color="white"
                                    borderRadius="20px"
                                    p="3px 10px"
                                    fontSize="15px"
                                    fontWeight="400">
                                    6 days
                                </Box>
                            </Box>
                        </Flex>
                        <Box
                            position="absolute"
                            bottom="-2"
                            right="2"
                            display="flex">
                            <Box
                                bg="#FF6838"
                                fontSize="12px"
                                p="2px 20px"
                                me='.7rem'
                                borderRadius="10px"
                                textAlign='center'
                                alignItems='center'
                                display='flex'
                                color="white">
                                call
                            </Box>
                            <Box
                                border="1px solid #cccc"
                                textAlign="center"
                                fontSize="15px"
                                borderRadius="8px"
                                p="8px">
                                <IoLogoWhatsapp color="green" />
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default ServiceProviders