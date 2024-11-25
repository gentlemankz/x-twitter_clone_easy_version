'use client';
import { useState, useEffect } from 'react';
import Tweets from './Tweets';

export default function TweetList({ tweets, searchTerm }) {
  const [filteredTweets, setFilteredTweets] = useState(tweets);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTweets(tweets);
      return;
    }

    const filtered = tweets.filter(tweet => 
      tweet.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tweet.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tweet.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTweets(filtered);
  }, [searchTerm, tweets]);

  return (
    <div>
      {filteredTweets.map((tweet, index) => (
        <Tweets
          key={index}
          fullName={tweet.fullName}
          userName={tweet.userName}
          minutes={tweet.minutes}
          content={tweet.content}
          imageUrl={tweet.imageUrl}
        />
      ))}
    </div>
  );
}
