import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    ListItem,
    Select,
    SimpleGrid,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Container from "../Layout/Container";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiGolfFlag } from "react-icons/gi";
import RoutesCard from "../Components/RoutesCard/RoutesCard";
import { default as routesCard } from "../store/trevello.json";
import ServiceProviders from "../Components/ServiceProviders/ServiceProviders";
import RoutesDetail from "../Components/RoutesDetail/RoutesDetail";

const ThirdPage = () => {
    return (
        <>
            <Box>
                <Container>
                    {/* image section */}
                    <Box py="2rem">
                        <Flex
                            justifyContent="space-between"
                            gap="15px"
                            flexDirection={["column", "column", "column", "row", "row"]}>
                            {[
                                { img: "/assets/bg1.jpg" },
                                { img: "/assets/bg2.jpg" },
                                { img: "/assets/bg3.jpg" },
                            ].map(({ img }) => (
                                <Box
                                    bg={`url('${img}') no-repeat center / cover`}
                                    w="full"
                                    m="0 !important"
                                    h="18rem"></Box>
                            ))}
                        </Flex>
                    </Box>
                    {/* trip content section */}

                    <Box>
                        <Flex
                            justifyContent="space-between"
                            py="2.5rem"
                            flexDirection={["column", "column", "column", "row", "row"]}>
                            {/* Route details */}
                            <Box
                                w={{ md: "55%" }}
                                mb={["1.5rem", "1.5rem", "1.5rem", "0", "0"]}>
                                <RoutesDetail />
                            </Box>
                            <Box w={{ md: "40%" }}>
                                <Box border="1px solid #CCCCCC" borderRadius="12px">
                                    <Flex
                                        alignItems="center"
                                        justifyContent="space-between"
                                        p="20px">
                                        <Box>
                                            <Heading fontSize="14px" fontWeight="600">
                                                All service Provers
                                            </Heading>
                                        </Box>
                                        <Flex alignItems="center" justifyContent="space-between">
                                            <Select
                                                placeholder="Price"
                                                w="95px"
                                                borderRadius="20px"
                                                me="1rem"
                                                borderColor="#cccc">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
                                            <Select
                                                placeholder="Days"
                                                w="95px"
                                                borderRadius="20px"
                                                borderColor="#cccc">
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </Select>
                                        </Flex>
                                    </Flex>
                                    <Box>
                                        <Box p="15px" h="800px" overflow="auto">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
                                                <ServiceProviders />
                                            ))}
                                        </Box>
                                        <Box textAlign="center" py="1.5rem">
                                            <Text
                                                textDecoration="underline"
                                                fontSize="13px"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                gap="10px">
                                                <GiGolfFlag fontSize="20px" /> Report a service provider
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                        {/* terms service section  */}
                        <Box py="2rem">
                            <Heading fontSize="19px" fontWeight="600">
                                Terms & Services
                            </Heading>
                            <Flex
                                justifyContent="space-between"
                                flexDirection={["column", "column", "row", "row", "row"]}
                                gap="10px"
                                mt="1rem">
                                <Box
                                    borderRadius="10px"
                                    bg="gray"
                                    w={{ md: "50%" }}
                                    h="200px"></Box>
                                <Box
                                    borderRadius="10px"
                                    bg="gray"
                                    w={{ md: "50%" }}
                                    h="200px"></Box>
                            </Flex>
                        </Box>
                        <Box py="2rem">
                            <Heading fontSize="19px" fontWeight="600">
                                Other Routes
                            </Heading>
                            <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center">
                                <SimpleGrid columns={[1, 2, 3, 4, 5]}>
                                    {routesCard.map((v) => (
                                        <RoutesCard
                                            data={{
                                                img: v.img,
                                                title: v.title,
                                                category: v.category,
                                                price: v.price,
                                                serviceBtn: v.serviceBtn,
                                            }}
                                        />
                                    ))}
                                </SimpleGrid>
                            </Flex>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default ThirdPage;
