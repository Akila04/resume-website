import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import NavComponent from '../NavComponent/Navcomponent'

const useStyles = makeStyles({
    list: {
      width: '30vh',
    },
    fullList: {
      width: 'auto',
    },
  });


const DrawerMenu = () => {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const menulist = () => {
        return(
            <div
                className = {classes.list}
                role="presentation"
                onClick={() => {setOpenDrawer(false)}}
                onKeyDown={() => {setOpenDrawer(false)}}
            > 
                <NavComponent />
            </div>
        );
    }

    return(
        <div>
        <Button style={{color: 'white'}} onClick={() => {setOpenDrawer(true)}}><MenuIcon /></Button>
        <Drawer open={openDrawer} onClose={() => {setOpenDrawer(false)}}>
            {menulist()}
        </Drawer>
        </div>
    );
}

export default DrawerMenu;