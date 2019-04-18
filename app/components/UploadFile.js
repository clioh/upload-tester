import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import uploadsQuery from '../queries/uploads'

const UploadFile = ({
  mutate,
  loading,
  done,
  setLoading,
  setDone,
  changeMediaType,
  mediaType
}) => {
  const handleChange = async ({
    target: {
      validity,
      files: [file]
    }
  }) => {
    setLoading()
    if (validity.valid) {
      await mutate({
        variables: {
          postBody: 'Hey Kenan! This is a file upload!',
          upload: { file: file, fileType: mediaType, size: 1 }
        }
      })
    }
    setDone()
  }

  return (
    <div>
      <select onChange={changeMediaType} style={{ marginRight: '2rem' }}>
        <option value="IMAGE">Image</option>
        <option value="VIDEO">Video</option>
      </select>
      <input type="file" required onChange={handleChange} />
      {loading && <div>Loading</div>}
      {done && <div>Done!</div>}
    </div>
  )
}

export default graphql(
  gql`
    mutation($upload: MediaUpload!, $postBody: String!) {
      createPost(postBody: $postBody, upload: $upload) {
        id
      }
    }
  `,
  {
    options: {
      context: {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJjanRpNm9icm02NHZ4MGI5NmpuNGkxZ2k1IiwiaWF0IjoxNTUzMTQ1NDA5MzUzLCJleHAiOjE1NTMyMzE4MDkzNTN9.-rNfZRLp4Lr7PkKlTLdIvqY7W0q_ttnO0qfjAjFamyc'
        }
      }
    }
  }
)(UploadFile)
