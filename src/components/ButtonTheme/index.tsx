import { ActionIcon, Box, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import { useEffect } from "react";

const ButtonTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Box>
  );
};

export default ButtonTheme;
