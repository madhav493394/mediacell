import React from "react";

import { Button, Flex, useColorMode } from "@chakra-ui/react";


const ThemeMode = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <Button size='xs' onClick={() => toggleColorMode()}>
            {colorMode === 'light' ?  '🌒':'🌞'}
        </Button>
    );

};



export default ThemeMode;