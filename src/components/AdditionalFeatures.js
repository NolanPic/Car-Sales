import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect, useSelector } from 'react-redux';

const AdditionalFeatures = props => {

  const additionalFeatures = useSelector(state => state.featuresReducer.additionalFeatures);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
