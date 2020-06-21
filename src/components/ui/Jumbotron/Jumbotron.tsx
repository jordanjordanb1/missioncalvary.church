import React from 'react';
import './Jumbotron.scss';
import Homepage from './Type/Homepage/Homepage';
import Full from './Type/Full/Full';
import Small from './Type/Small/Small';

type JumbotronProps = {
  readonly type: 'full' | 'small' | 'homepage';
  readonly imgName?: string;
  readonly message?: string;
  readonly bibleVerse?: string;
  readonly bibleLocation?: string;
};

const Jumbotron: React.FC<JumbotronProps> = ({
  type,
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}): JSX.Element => {
  type === 'full' && (
    <Full
      imgName={imgName}
      message={message}
      bibleVerse={bibleVerse}
      bibleLocation={bibleLocation}
    />
  );

  type === 'small' && (
    <Small message={message} bibleVerse={bibleVerse} bibleLocation={bibleLocation} />
  );

  type === 'homepage' && <Homepage />;

  return <></>;
};

export default React.memo(Jumbotron);
