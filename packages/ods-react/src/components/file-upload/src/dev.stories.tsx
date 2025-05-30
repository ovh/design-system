import { useEffect, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { FileUpload, FileUploadItem, FileUploadList } from '.';
import style from './dev.module.css';

export default {
  component: FileUpload,
  title: 'FileUpload dev',
};

export const Accept = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      accept="image/*"
      onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const CustomCSS = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      className={ style['custom-file-upload'] }
      maxFile={ 20 }
      onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList className={ style['custom-file-upload-list'] }>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const Default = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const Disabled = () => (
  <FileUpload disabled>
    <FileUploadList />
  </FileUpload>
);

export const Error = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      error="Some global error to display"
      onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const FakeUpload = () => {
  type MyFile = File & {
    error?: string,
    progress?: number,
  }

  const [files, setFiles] = useState<MyFile[]>([]);

  useEffect(() => {
    files.forEach((file) => {
      if (!file.progress) {
        uploadFile(file);
      }
    });
  }, [files]);

  function uploadFile(file: MyFile): void {
    const intervalId = setInterval(() => {
      setFiles((files) => files.map((f) => {
        if (f.name === file.name) {
          f.progress = (f.progress || 0) + Math.floor(Math.random() * 10 + 1);

          if (f.progress >= 100) {
            clearInterval(intervalId);
          }
        }
        return f;
      }));
    }, 100);
  }

  return (
    <FileUpload onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file, idx) => (
            <FileUploadItem
              error={ file.error }
              file={ file }
              key={ idx }
              progress={ file.progress } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const InFormField = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          Files:
        </FormFieldLabel>

        <FileUpload onFileAccept={ ({ files }) => setFiles(files) }>
          <FileUploadList>
            {
              files.map((file: File, idx) => (
                <FileUploadItem
                  file={ file }
                  key={ idx } />
              ))
            }
          </FileUploadList>
        </FileUpload>

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      onFileAccept={ ({ files }) => setFiles(files) }
      invalid>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const MaxFile = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      maxFile={ 3 }
      onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const MaxSize = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      maxSize={ 10 }
      onFileAccept={ ({ files }) => setFiles(files) }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};

export const Rules = () => (
  <>
    <FileUpload acceptedFileLabel="Formats acceptés : images">
      <FileUploadList />
    </FileUpload>

    <FileUpload
      maxFile={ 3 }
      maxFileLabel="Nombre maximal de fichiers :">
      <FileUploadList />
    </FileUpload>

    <FileUpload
      maxSize={ 524288000 }
      maxSizeLabel="Taille de fichier max :">
      <FileUploadList />
    </FileUpload>

    <FileUpload
      acceptedFileLabel="Formats acceptés : images"
      maxFile={ 3 }
      maxFileLabel="Nombre maximal de fichiers :"
      maxSize={ 524288000 }
      maxSizeLabel="Taille de fichier max :">
      <FileUploadList />
    </FileUpload>
  </>
);
