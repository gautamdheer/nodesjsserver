const Posts = require("../models/postmodel");
const { response } = require("express");

const dbconnnectivity = require("../dbconnection");
const { collection } = require("../models/postmodel");

exports.getAllDevices = async (req, res) => {
  console.log("res");
  dbconnnectivity.query("SELECT * FROM devices", function (err, result) {
    if (err) res.status(500).send({ error: "Something Wrong" });
    if (result) {
      res.json({ res: result });
    }
  });
};

exports.getDeviceByMacAddress = async (req, res) => {
  dbconnnectivity.query("SELECT * FROM devices", function (err, result) {
    if (err) res.status(500).send({ error: "Something Wrong" });
    if (result) {
      res.json({ res: result });
    }
  });
};

exports.addNewDevice = async (req, res) => {
  const { deviceid, devicemacAddress } = req.body;
  const sql = `insert into devices (device_name,mac_address) values ('${deviceid}','${devicemacAddress}');`;
  console.log(sql);
  dbconnnectivity.query(sql, function (err, result) {
    console.log(err);
    if (err) res.status(500).send({ error: "Something Wrong" });
    if (result) {
      res.json({ res: result });
      // console.log(result);
    }
  });
};
