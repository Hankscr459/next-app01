import { forwardRef } from "react";

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

// eslint-disable-next-line react/display-name
const subCard = forwardRef(
  (
    {
      children,
      content,
      contentClass,
      darkTitle,
      secondary,
      sx = {},
      contentSX = {},
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    return pug`
      Card(
        ref=${ref}
        sx=${{
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
          },
          ...sx,
        }},
        ${{...others}}
      )
      
        if !darkTitle && title
          CardHeader(
            sx=${{pr: '24px'}}
            title=${<Typography variant="h5">{title}</Typography>}
            action=${secondary}
          )
        if darkTitle && title
          CardHeader(
            sx=${{ p: 2.5 }}
            title=${<Typography variant="h4">{title}</Typography>}
            action=${secondary}
          )

        if title
          Divider(
            sx=${{
              opacity: 1,
              borderColor: theme.palette.primary.light,
            }},
          )

        if content
          CardContent(
            sx=${{ p: 2.5, ...contentSX }},
            className=${contentClass || ''},
          )
            ${children}
        ${!content && children}
    `;
  }
);

SubCard.defaultProps = {
  content: true,
};

export default subCard;
