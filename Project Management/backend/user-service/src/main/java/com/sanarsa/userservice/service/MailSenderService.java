package com.sanarsa.userservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.sanarsa.userservice.model.SignupMail;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailSenderService {

    @Autowired
    private JavaMailSender mailSender;


    // Use it to send HTML emails
    public void sendHTMLMail(SignupMail mail) throws MessagingException {

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, false, "utf-8");

        helper.setTo(mail.getTo());
        helper.setSubject(mail.getSubject());
        message.setContent(mail.getContent(), "text/html");

        mailSender.send(message);
    }
}
