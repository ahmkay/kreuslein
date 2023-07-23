import * as React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalImmo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <a onClick={handleOpen} className='servOptLink'>
                <div className='servItemBackground' id="opt3"></div>
                <div className='serviceLayer'></div>
                <div className='servOptTextWrapper'>
                    <p className='servOptText'>Erbrecht</p>
                </div>
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalInnerBox' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalTitle'>
                        Erbrecht Leistungen
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='modalText'>
                        Welche Art Service benötigen Sie?
                    </Typography>

                    <Grid container justifyContent="center" spacing={2} className='modalServiceGrid'>
                        <Grid item xs={12} sm={12}>         
                                <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Erbrecht Service #1</p>
                                </a>
                        </Grid>
                        <Grid item xs={12} sm={12}>         
                        <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Erbrecht Service #2</p>
                                </a>
                        </Grid>
                        <Grid item xs={12} sm={12}>         
                        <a href="#" className='servOptTextModal'>
                                    <p className='servOptTextBox'>Erbrecht Service #3</p>
                                </a>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </div>
    );
}