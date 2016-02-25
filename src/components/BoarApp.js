import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import BoarDatePicker from './DatePicker';
import Moment from 'moment';

export const fields = [
  'firstName',
  'lastName',
  'speechTitle',
  'speechDate',
  'transcriptSource',
  'speechContext',
  'speechTags',
  'speechText',
  'commonTags_0',
  'commonTags_1',
  'commonTags_2',
  'commonTags_3',
  'commonTags_4'];

class BoarApp extends Component {

  render() {
    const {
      fields:{firstName, lastName, speechTitle, speechDate, transcriptSource, speechContext, speechTags, speechText, commonTags_0, commonTags_1, commonTags_2, commonTags_3, commonTags_4},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>

            <legend>Submit a speech</legend>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="firstName">First Name</label>
              <div className="col-md-8">
              <input id="firstName" name="firstName" type="text" placeholder="George" className="form-control input-md" required="" {...firstName} />
              <span className="help-block">The first name of the person who gave the speech</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="lastName">Last Name</label>
              <div className="col-md-8">
              <input id="lastName" name="lastName" type="text" placeholder="Washington" className="form-control input-md" required="" {...lastName} />
              <span className="help-block">The last name of the person who gave the speech</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="speechTitle">Title of speech</label>
              <div className="col-md-8">
              <input id="speechTitle" name="speechTitle" type="text" placeholder="Prevents the revolt of his officers" className="form-control input-md" required="" {...speechTitle} />
              <span className="help-block">Title of speech or brief description</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="speechDate">Date of speech</label>
              <div className="col-md-8">
                <BoarDatePicker {...speechDate} value={speechDate.value || "03/31/1977"}/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="transcriptSource">Source</label>
              <div className="col-md-8">
              <input id="transcriptSource" name="transcriptSource" type="text" placeholder="http://www.greatspeeches.com" className="form-control input-md" required="" {...transcriptSource} />
              <span className="help-block">A source for the transcript of the speech, preferably a working URL</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="speechTags">Tags</label>
              <div className="col-md-8">
              <input id="speechTags" name="speechTags" type="text" placeholder="campaign, war on drugs, iraq" className="form-control input-md" {...speechTags} />
              <span className="help-block">Comma separated list of tags</span>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="commonTags">Pick all that apply</label>
              <div className="col-md-8">
                <div className="checkbox">
                  <label htmlFor="commonTags-0">
                    <input type="checkbox" name="commonTags" id="commonTags-0" value="0" {...commonTags_0} />
                    Campaign speech
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="commonTags-1">
                    <input type="checkbox" name="commonTags" id="commonTags-1" value="1" {...commonTags_1} />
                    Presidential
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="commonTags-2">
                    <input type="checkbox" name="commonTags" id="commonTags-2" value="2" {...commonTags_2} />
                    War
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="commonTags-3">
                    <input type="checkbox" name="commonTags" id="commonTags-3" value="3" {...commonTags_3} />
                    Congressional
                  </label>
                </div>
                <div className="checkbox">
                  <label htmlFor="commonTags-4">
                    <input type="checkbox" name="commonTags" id="commonTags-4" value="4" {...commonTags_4} />
                    Budget
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="speechContext">Background or context</label>
              <div className="col-md-8">
                <span className="help-block">Why was the speech given? Paragraph or two of background.</span>
                <textarea className="form-control" id="speechContext" name="speechContext" {...speechContext} value={speechContext.value || ''} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-2 control-label" htmlFor="speechText">Speech text</label>
              <div className="col-md-8">
                <span className="help-block">Paste speech text here...</span>
                <textarea className="form-control" id="speechText" name="speechText" {...speechText} value={speechText.value || ''} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-4 control-label" htmlFor="submit"></label>
              <div className="col-md-8">
                <button id="submit" name="submit" className="btn btn-success" disabled={submitting}>{submitting ? <i/> : <i/>} Submit</button>
                <button id="reset" name="reset" className="btn btn-danger" disabled={submitting} onClick={resetForm}>Reset</button>
              </div>
            </div>

          </fieldset>
          </form>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}

BoarApp.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

BoarApp = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'submitSpeech',                           // a unique name for this form
  fields
})(BoarApp);

export default BoarApp;
