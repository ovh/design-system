import { type ChangeEvent, useEffect, useState } from 'react';
import { FileThumbnail } from '.';

export default {
  component: FileThumbnail,
  title: 'FileThumbnail dev',
};

const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain', lastModified: 1736512509922 });

export const Default = () => (
  <FileThumbnail file={ fakeFile } />
);

export const Disabled = () => (
  <FileThumbnail
    disabled
    file={ fakeFile } />
);

export const Ellipsis = () => (
  <FileThumbnail
    file={ new File(['foo'], 'A very long name to see if ellipsis renders correctly.txt', { type: 'text/plain' }) }
    style={{ width: '300px' }} />
);

export const Error = () => (
  <FileThumbnail
    error="Something went wrong"
    file={ fakeFile } />
);

export const RealFile = () => {
  const [file, setFile] = useState<File>();

  return (
    <>
      <input
        onChange={ (e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
        type="file" />
      {
        file &&
        <FileThumbnail file={ file } />
      }
    </>
  );
};

export const Progress = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState<number | undefined>();

  useEffect(() => {
    if (progress === undefined) {
      return;
    }

    if (progress >= 100) {
      setProgress(undefined);
      return;
    }

    if (progress >= 0) {
      setTimeout(() => {
        setProgress((p) => (p ?? 0) + 5);
      }, 500);
    }
  }, [progress]);

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setProgress(0);
      setFile(e.target.files[0]);
    }
  }

  return (
    <>
      <input
        onChange={ onFile }
        type="file" />
      {
        file &&
        <FileThumbnail
          file={ file }
          progress={ progress } />
      }
    </>
  );
};
