import { Component } from 'react'
import Page from '../components/Page'
import Section from '../components/Section'
import UploadBlob from '../components/UploadBlob'
import UploadFile from '../components/UploadFile'
import UploadFileList from '../components/UploadFileList'
import Uploads from '../components/Uploads'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      done: false,
      mediaType: 'IMAGE'
    }
  }
  changeMediaType(a) {
    a.preventDefault()
    this.setState({ mediaType: a.target.value })
    debugger
  }

  render() {
    return (
      <Page title="Upload example">
        <Section heading="Upload File">
          <UploadFile
            loading={this.state.loading}
            done={this.state.done}
            setLoading={() => this.setState({ loading: true })}
            setDone={() => this.setState({ loading: false, done: true })}
            changeMediaType={this.changeMediaType.bind(this)}
            mediaType={this.state.mediaType}
          />
        </Section>
      </Page>
    )
  }
}

export default IndexPage
