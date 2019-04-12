import React, {useCallback} from 'react';

export default function Reader({ src }) {
  return (
    <div>
      <audio
        src={src}
        controls
        autoPlay
      />
    </div>
  )
}
