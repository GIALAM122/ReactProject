import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Tooltip from '@mui/joy/Tooltip';
import Option from '@mui/joy/Option';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AddIcon from '@mui/icons-material/Add';



export default function ColorInversionNavigation() {
  const [color] = React.useState('neutral');
  return (
    <Box sx={{ display: 'flex', borderRadius: 'sm', overflow: 'auto' }}>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          bgcolor: `${color}.800`,
          '& .MuiBadge-root': { '--Badge-ringColor': '#FFF' },
          '& .MuiBadge-colorSuccess': { bgcolor: 'success.400' },
          '& button': {
            borderRadius: '50%',
            padding: 0,
            '--IconButton-size': '3rem',
          },
        }}
      >
        <Badge badgeContent="7" badgeInset="10%" size="sm">
          <IconButton>
            <Avatar src="/static/images/avatar/3.jpg" />
          </IconButton>
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeInset="15%"
          color="success"
        >
          <IconButton>
            <Avatar src="/static/images/avatar/4.jpg" />
          </IconButton>
        </Badge>
        <Tooltip title="Add another chat" variant="soft">
          <IconButton sx={{ color: 'text.tertiary' }}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Sheet>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          p: 2,
          ...(color !== 'neutral' && {
            bgcolor: `${color}.700`,
          }),
        }}
      >
        <Select
          variant="soft"
          defaultValue="1"
          size="sm"
          color={color}
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                p: 0.75,
                borderRadius: '50%',
                lineHeight: 0,
                alignSelf: 'center',
              }}
            >
              <BubbleChartIcon fontSize="small" sx={{ m: 0 }} />
            </Sheet>
          }
          sx={{
            py: 1,
            bgcolor: 'transparent',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Option value="1">General team</Option>
          <Option value="2">Engineering team</Option>
        </Select>
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            flexGrow: 0,
            minWidth: 200,
          }}
        >
               <ListItemButton component="a" href="/admin">
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            Dashboard
          </ListItemButton>

          <ListItemButton component="a" href="/admin/users">
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
            User
          </ListItemButton>
          <ListItem nested>
            <ListSubheader>Shortcuts</ListSubheader>
            <List>
              <ListItemButton component="a" href="/">Home Page</ListItemButton>
              <ListItemButton>Reports</ListItemButton>
            </List>
          </ListItem>
        </List>
        <Card
          variant="soft"
          orientation="horizontal"
          sx={{ mt: 2, display: 'flex', alignItems: 'center', borderRadius: 'sm' }}
        >
          <CircularProgress value={35} determinate thickness={8} size="lg">
            35%
          </CircularProgress>
          <CardContent sx={{ ml: 2 }}>
            <Chip
              size="sm"
              variant="outlined"
              sx={{ alignSelf: 'flex-start', mb: 1 }}
            >
              Active
            </Chip>
            <Typography fontSize="xs">Last update: 22/12/22</Typography>
          </CardContent>
        </Card>
      </Sheet>
      
    </Box>
  );
}
