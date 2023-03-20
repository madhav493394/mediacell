import React from 'react'
import { Box, Flex, Spacer, Link, Heading } from "@chakra-ui/react"
import ThemeMode from '../theme/thememode'

function Navbar() {
    return (
        <Box p={4}>
            <Flex justifyContent="space-between" alignItems='center'>
                <Heading size="md">Madhav</Heading>
                <Flex  justifyContent="space-between" alignItems='center'>
                    <Box>
                        <Link mr={4}>Home</Link>
                        <Link mr={4}>About</Link>
                        <Link mr={4}>Contact</Link>

                    </Box>
                    <ThemeMode />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar