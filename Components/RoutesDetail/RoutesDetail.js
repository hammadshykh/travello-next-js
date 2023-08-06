import { Box, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react"


const RoutesDetail = () => {
    return (
        <>

            <Box>
                <Box py="2.5rem" borderBottom="1px solid #CCCCCC">
                    <Heading fontSize="24px" fontWeight="600">
                        Trip to deosai & Skardu
                    </Heading>
                    <Text fontSize="14.4px" lineHeight="25px" my="1rem">
                        Deosai Plains also known as “The Land of Giants” is the
                        second largest plateau in the world, located 30 km from
                        Skardu city. It is an ideal place for picnics and fun
                        activities like camping. Skardu is located at a height of
                        2,500 m in Gilgit Baltistan region of Pakistan. The exotic
                        beauty of surrounding areas, the valleys, lakes and
                        freshwater springs add to its breathtakingly beautiful
                        scenery.{" "}
                    </Text>
                </Box>
                {/* Attraction points */}
                <Box borderBottom="1px solid #CCCCCC" py="2.5rem">
                    <Heading fontSize="19px" fontWeight="500">
                        Attraction points
                    </Heading>
                    <Flex justifyContent="space-between" my="1rem">
                        <Box
                            p="0.5rem 2.5rem 0.5rem 2.5rem"
                            w={{ md: "250px" }}
                            gap="10px">
                            <UnorderedList fontSize={["12px", '12px', '12px', '15px', '15px']} lineHeight="28px">
                                <ListItem>Deosai Plains</ListItem>
                                <ListItem>Sadpara Lake</ListItem>
                                <ListItem>Sheosar Lake</ListItem>
                                <ListItem>Shangrila Lake</ListItem>
                                <ListItem>Upper kachura lake</ListItem>
                                <ListItem>Shigar fort</ListItem>
                                <ListItem>Kharpocho Fort</ListItem>
                            </UnorderedList>
                        </Box>
                        <Box
                            w={{ md: "300px" }}
                            p={{ md: "0.5rem 4rem 0.5rem 2.5rem" }}
                            gap="10px">
                            <UnorderedList fontSize={["12px", '12px', '12px', '15px', '15px']} lineHeight="28px">
                                <ListItem>Buddha Rock Carvings</ListItem>
                                <ListItem> Shigar Mosque</ListItem>
                                <ListItem>Khaplu Palace</ListItem>
                                <ListItem>Macholo Valley</ListItem>
                                <ListItem>Chaqchan Mosque</ListItem>
                                <ListItem>Mantokha Waterfall</ListItem>
                                <ListItem>Cold Desert</ListItem>
                            </UnorderedList>
                        </Box>
                    </Flex>
                </Box>
                <Box py="2.5rem" borderBottom="1px solid #CCCCCC">
                    <Heading fontSize="19px" fontWeight="500">
                        What’s included
                    </Heading>
                    <Flex justifyContent="space-between" my="1rem" gap={['5px', '5px', '5px', '0', '0']}>
                        {[
                            { title: "Breakfast" },
                            { title: "Dinner" },
                            { title: "Hotel" },
                            { title: "Transport" },
                        ].map(({ title }) => (
                            <Flex
                                border="1px solid #CCCCCC"
                                p="10px"
                                w={{ sm: "150px" }}
                                h={{ md: "120px" }}
                                borderRadius="10px"
                                justify="center"
                                alignItems="center">
                                <Text>{title}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
                <Box borderBottom="1px solid #CCCCCC" py="2.5rem">
                    <Heading fontSize="19px" fontWeight="500">
                        Things to know
                    </Heading>
                    <Box h={{ md: "220px" }} p="0 40px 0 40px" gap="10px">
                        <Heading fontSize="14px" fontWeight="600" mt="1.5rem">
                            Activities
                        </Heading>
                        <UnorderedList fontSize={["13px", '13px', '15px', '15px', '15px']} lineHeight="28px" p="15px" >
                            <ListItem>Trek to K2 Base Camp.</ListItem>
                            <ListItem>
                                Mountaineering, Trekking and Hiking.
                            </ListItem>
                            <ListItem>Fishing.</ListItem>
                            <ListItem>Bar B Que</ListItem>
                            <ListItem>Chaqchan Mosque</ListItem>
                            <ListItem>Enjoying Skardu Wildlife.</ListItem>
                            <ListItem>Walking tours to Narsok.</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default RoutesDetail