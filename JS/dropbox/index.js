import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  accessToken:
    'sl.BInm5SVYD9a2bYeTNhESN_6altrS3I63IB4bUaWco8P281-F7HWbflyvwca1yLAw4LYmg5SBhcAhHCUsjgvAahjOFXl6bzXSbyu8PCFeDLa7oxVrR2CWw5qnKPkcP_4fV6fFRmx-drFJ',
  fetch,
});

dbx.filesListFolder(
  {
    path: '',
  }.then((res) => console.log(res))
);
