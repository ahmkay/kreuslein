import * as React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '80%',
    p: '20px',
    borderColor: '#9AAFB7',
};

export default function ModalImmo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <a onClick={handleOpen} className='servOptLink'>
                <div className='servItemBackground' id="opt1"></div>
                <div className='serviceLayer'></div>
                <div className='servOptTextWrapper'>
                    <p className='servOptText'>Immobilien</p>
                </div>
            </a>
            <Modal className='modalOuterBox'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalInnerBox' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalTitle'>
                        Immobilien Leistungen
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='modalText'>
                        Welche Art Service benötigen Sie?
                    </Typography>

                    <Grid container justifyContent="center" spacing={2} className='modalServiceGrid'>
                        <Grid item xs={12} sm={12}>         
                                <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Immobilien Service #1</p>
                                </a>
                        </Grid>
                        <Grid item xs={12} sm={12}>         
                        <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Immobilien Service #2</p>
                                </a>
                        </Grid>
                        <Grid item xs={12} sm={12}>         
                        <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Immobilien Service #3</p>
                                </a>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </div>
    );
}