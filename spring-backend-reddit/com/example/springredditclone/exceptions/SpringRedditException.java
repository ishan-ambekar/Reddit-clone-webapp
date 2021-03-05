package com.example.springredditclone.exceptions;

public class SpringRedditException extends Throwable {
    public SpringRedditException(String exMessage, Exception exception) {
        super(exMessage, exception);
    }

    public SpringRedditException(String exMessage) {
        super(exMessage);
    }
}
