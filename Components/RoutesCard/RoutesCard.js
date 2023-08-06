import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

const RoutesCard = ({ data: { img, category, title, price, serviceBtn } }) => {
    return (
        <>
            <Card maxW="lg" border='none' boxShadow='none'>
                <CardBody>
                    <Box >
                        <Image
                            src={img}
                            h='210px'
                            w='full'
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                        />
                    </Box>
                    <Stack mt="2" lineHeight='10px'>
                        <Text fontWeight='700' fontSize='11px' lineHeight='20px' color='#767676'>{category}</Text>
                        <Heading fontSize='14px'>{title}</Heading>
                        <Text color="black" fontSize="12px" fontWeight="600">
                            {price}
                            <span style={{ fontWeight: "normal" }}>
                                /person
                            </span>
                        </Text>
                        <Button textAlign='left' variant="unstyled" fontSize='13px'
                            color="#008489"
                        >
                            {serviceBtn}
                        </Button>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
};

export default RoutesCard;
